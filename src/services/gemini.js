import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyCCou_j-rKsU_75Xe19W_Wme1L9YoFO2o8');

export async function generateResumeContent(prompt, currentContent = '') {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    const result = await model.generateContent(
      `${prompt}\nConteúdo atual: ${currentContent}\nResponda de forma breve, concisa e objetiva.`
    );
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Erro ao gerar conteúdo:', error);
    throw error;
  }
}

export async function generateWorkExperience(position, company, duration, industry) {
  const prompt = `Gere 2-3 pontos curtos de experiência profissional para o cargo de ${position} na empresa ${company}, durante ${duration}.
  Foque em conquistas quantificáveis no setor de ${industry}.
  Use frases curtas iniciadas com verbos de ação.`;
  return generateResumeContent(prompt);
}

export async function generateEducation(degree, institution, field) {
  const prompt = `Descreva brevemente a educação: ${degree} em ${field}, na instituição ${institution}.
  Máx. 2 frases destacando conquistas acadêmicas ou projetos relevantes.`;
  return generateResumeContent(prompt);
}

export async function generateSkills(jobTitle, experience, industry) {
  const prompt = `Liste 5-7 habilidades principais para ${jobTitle} com ${experience} anos de experiência no setor de ${industry}.
  Use apenas palavras ou expressões separadas por vírgulas, sem explicações longas.`;
  return generateResumeContent(prompt);
}

export async function generateProject(projectName, technologies, industry) {
  const prompt = `Descreva brevemente o projeto ${projectName} no setor de ${industry}, usando ${technologies}.
  Máx. 2 frases: problema resolvido + impacto mensurável.`;
  return generateResumeContent(prompt);
}

export async function improveContent(section, content) {
  const prompt = `Melhore o conteúdo da seção ${section} de forma breve e profissional:
  ${content}
  Use frases curtas, verbos de ação e destaque conquistas mensuráveis.`;
  return generateResumeContent(prompt);
}

export async function generateFullResume(userData) {
  const prompt = `Crie um currículo profissional curto para ${userData.jobTitle}, com ${userData.experience} anos no setor ${userData.industry}.
  Seções:
  1. Resumo (2 frases)
  2. Experiência (2-3 tópicos por empresa)
  3. Educação (máx. 2 frases)
  4. Habilidades (lista curta)
  5. Projetos (máx. 2 frases cada)
  Objetivo: ${userData.objective}`;
  
  return generateResumeContent(prompt);
}

export async function generateCoverLetter(jobTitle, company, experience, skills, userBackground) {
  const prompt = `Crie uma carta de apresentação curta para o cargo de ${jobTitle} na empresa ${company}.
  Histórico: ${userBackground}
  Experiência: ${experience} anos
  Habilidades: ${skills}
  
  Estrutura:
  - Abertura (1 frase de entusiasmo)
  - Corpo (2 frases curtas com conquistas relevantes)
  - Fechamento (1 frase de interesse + agradecimento)`;
  
  return generateResumeContent(prompt);
}

export async function customizeCoverLetter(content, specificRequirements, companyResearch) {
  const prompt = `Resuma e personalize a seguinte carta de apresentação de forma breve e objetiva:
  
  Conteúdo Original:
  ${content}
  
  Destaque requisitos da vaga:
  ${specificRequirements}
  
  Inclua valores/cultura da empresa:
  ${companyResearch}
  
  Mantenha no máximo 5 frases curtas, com tom profissional e direto.`;
  
  return generateResumeContent(prompt);
}

export async function generateCoverLetterSection(sectionType, jobDetails, userExperience) {
  const sectionPrompts = {
    opening: `Escreva uma frase de abertura curta e envolvente para uma carta de apresentação para o cargo de ${jobDetails.position} na empresa ${jobDetails.company}.`,
    
    body: `Escreva 2 frases curtas destacando experiência como ${userExperience.currentRole}, alinhada à função de ${jobDetails.position}.`,
    
    closing: `Escreva uma frase de encerramento breve para a vaga de ${jobDetails.position}, expressando interesse em entrevista e agradecendo pela consideração.`
  };

  return generateResumeContent(sectionPrompts[sectionType]);
}
