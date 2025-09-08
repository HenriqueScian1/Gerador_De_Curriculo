import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyCCou_j-rKsU_75Xe19W_Wme1L9YoFO2o8');

export async function generateResumeContent(prompt, currentContent = '') {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    const result = await model.generateContent(
      `${prompt}\nConteúdo atual: ${currentContent}`
    );
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Erro ao gerar conteúdo:', error);
    throw error;
  }
}

export async function generateWorkExperience(position, company, duration, industry) {
  const prompt = `Gere pontos de experiência profissional para o cargo de ${position} na empresa ${company}, durante ${duration}.
  Foque em conquistas quantificáveis e contribuições de impacto no setor de ${industry}.
  Formate a resposta como tópicos iniciados com verbos de ação fortes.`;
  return generateResumeContent(prompt);
}

export async function generateEducation(degree, institution, field) {
  const prompt = `Gere uma descrição profissional de educação para ${degree} em ${field}, na instituição ${institution}.
  Inclua disciplinas relevantes, conquistas acadêmicas e quaisquer projetos ou pesquisas especiais.
  Formate como um parágrafo conciso destacando os principais resultados acadêmicos.`;
  return generateResumeContent(prompt);
}

export async function generateSkills(jobTitle, experience, industry) {
  const prompt = `Gere uma lista abrangente de habilidades técnicas e interpessoais para ${jobTitle} com ${experience} anos de experiência no setor de ${industry}.
  Inclua tanto habilidades técnicas quanto comportamentais relevantes para a função.
  Formate como uma lista separada por vírgulas, priorizando as mais importantes primeiro.`;
  return generateResumeContent(prompt);
}

export async function generateProject(projectName, technologies, industry) {
  const prompt = `Gere uma descrição profissional de projeto para ${projectName}, utilizando ${technologies} no setor de ${industry}.
  Inclua o problema resolvido, as tecnologias usadas e resultados mensuráveis.
  Formate como um parágrafo conciso, com ênfase na implementação técnica e impacto no negócio.`;
  return generateResumeContent(prompt);
}

export async function improveContent(section, content) {
  const prompt = `Melhore o seguinte conteúdo da seção ${section} de um currículo, tornando-o mais profissional e impactante:\n${content}
  Foque em:
  - Usar verbos de ação fortes
  - Incluir conquistas quantificáveis
  - Ser conciso, mas descritivo
  - Manter tom profissional`;
  return generateResumeContent(prompt);
}

export async function generateFullResume(userData) {
  const prompt = `Gere um currículo profissional para ${userData.jobTitle}, com ${userData.experience} anos de experiência no setor de ${userData.industry}.
  Inclua as seguintes seções:
  1. Resumo Profissional
  2. Experiência de Trabalho em ${userData.companies.join(', ')}
  3. Educação: ${userData.education.join(', ')}
  4. Habilidades relevantes para ${userData.jobTitle}
  5. Projetos utilizando ${userData.technologies.join(', ')}
  
  Foque em:
  - Conquistas específicas do setor
  - Expertise técnica
  - Liderança e habilidades interpessoais
  - Resultados mensuráveis
  
  Objetivo de carreira atual: ${userData.objective}`;
  
  return generateResumeContent(prompt);
}

export async function generateCoverLetter(jobTitle, company, experience, skills, userBackground) {
  const prompt = `Gere uma carta de apresentação profissional para o cargo de ${jobTitle} na empresa ${company}.
  Histórico: ${userBackground}
  Experiência: ${experience} anos
  Principais Habilidades: ${skills}
  
  Requisitos:
  - Tom profissional e envolvente
  - Estrutura clara (abertura, corpo, fechamento)
  - Destacar habilidades e experiências relevantes
  - Demonstrar entusiasmo pela empresa e pela vaga
  - Manter concisão e impacto
  - Incluir saudação e fechamento adequados
  
  Formate como uma carta de apresentação completa, com parágrafos bem estruturados.`;
  
  return generateResumeContent(prompt);
}

export async function customizeCoverLetter(content, specificRequirements, companyResearch) {
  const prompt = `Personalize e melhore a seguinte carta de apresentação:
  
  Conteúdo Original:
  ${content}
  
  Requisitos da vaga a enfatizar:
  ${specificRequirements}
  
  Pesquisa/Valores da empresa a incluir:
  ${companyResearch}
  
  Torne a carta mais direcionada por:
  - Incorporar valores e cultura específicos da empresa
  - Abordar os principais requisitos da vaga
  - Adicionar conquistas relevantes
  - Manter tom profissional, mas pessoal`;
  
  return generateResumeContent(prompt);
}

export async function generateCoverLetterSection(sectionType, jobDetails, userExperience) {
  const sectionPrompts = {
    opening: `Crie um parágrafo de abertura envolvente para uma carta de apresentação para o cargo de ${jobDetails.position} na empresa ${jobDetails.company}.
    Demonstre entusiasmo e mencione brevemente como soube da oportunidade.`,
    
    body: `Gere um parágrafo de corpo convincente, destacando a experiência como ${userExperience.currentRole},
    que me torna um candidato ideal para a função de ${jobDetails.position}. Foque em conquistas específicas e habilidades que correspondem aos requisitos da vaga.`,
    
    closing: `Escreva um parágrafo de encerramento forte para a vaga de ${jobDetails.position}, expressando interesse em uma entrevista
    e agradecendo ao leitor pela consideração. Inclua uma despedida profissional.`
  };

  return generateResumeContent(sectionPrompts[sectionType]);
}
