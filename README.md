# 📄 Gerador de Currículo Inteligente com Preview em Tempo Real

Uma aplicação **React moderna** que permite aos usuários criar currículos profissionais com **preview instantâneo**.
Este é o **primeiro módulo** de um projeto em duas etapas, demonstrando conceitos avançados de **React** e **TailwindCSS**.

---

## 🚀 Tecnologias

* **React 19**
* **TypeScript**
* **TailwindCSS v4**
* **Vite**

---

## 🎯 Objetivos e Conceitos em Foco

* **Formulários Controlados** → Gerenciamento avançado de estado de formulários
* **Layout Desktop** → Grid e Flexbox com TailwindCSS v4
* **Sincronização de Estado** → Preview em tempo real
* **Componentização** → Arquitetura escalável de componentes
* **Listas Dinâmicas** → Adicionar/remover itens dinamicamente

> ⚠️ **Importante:** Este projeto é **exclusivo para desktop/laptop**.
> Não possui suporte para layout responsivo/mobile, pois o foco está em **conceitos React fundamentais**.

---

## 💡 Por que não responsivo?

* Foco total em **conceitos React** sem distrações
* Simplificação do CSS para priorizar JavaScript
* Currículos são tipicamente criados em **telas desktop**
* Evita complexidade adicional desnecessária

---

## 🖥️ Conceito da Aplicação

**Layout Split-Screen (Tela Dividida):**

* **Esquerda (50%)** → Formulário completo para entrada de dados
* **Direita (50%)** → Preview atualizado em tempo real
* Layout fixo e otimizado para telas desktop

---

## 📝 Estrutura do Formulário

1. **Dados Pessoais** → Nome, email, telefone, LinkedIn, resumo
2. **Habilidades** → Lista dinâmica com níveis de proficiência
3. **Experiências** → Lista dinâmica de experiências profissionais

---

## ⚙️ Funcionalidades Core

* ✅ **Preview Instantâneo** → Atualização em tempo real
* ✅ **Listas Dinâmicas** → Habilidades e experiências
* ✅ **Layout Desktop** → Interface otimizada
* ✅ **Design Profissional** → Clean e moderno

---

## 🔑 Conceitos React Praticados

1. **Estado Compartilhado Avançado**

   * Estado central para todo o currículo
   * Sincronização entre formulário e preview
   * Gerenciamento de listas dinâmicas

2. **Componentes Controlados**

   * Inputs com validação
   * Textareas com contadores
   * Listas reutilizáveis

3. **Props e Lifting State Up**

   * Comunicação pai ↔ filho
   * Callbacks para atualização
   * Prop drilling e soluções

4. **Renderização Condicional Avançada**

   * Layout baseado em estado
   * Estados vazios e de loading
   * Feedback visual de validação

---

## 📌 Requisitos Funcionais

### 01 - Layout Split-Screen

* Tela dividida em **duas colunas iguais**
* **Scroll independente** em cada seção

### 02 - Formulário de Dados Pessoais

* Campos: Nome, Email, Telefone, LinkedIn
* Textarea para resumo profissional
* **Validação em tempo real**
* Contador de caracteres para resumo

### 03 - Gerenciamento de Habilidades

* Lista dinâmica de habilidades
* Input de nome + seletor de nível (**Básico / Intermediário / Avançado**)
* Botões de **adicionar/remover**

### 04 - Gerenciamento de Experiências

* Lista dinâmica de experiências
* Campos: Empresa, Cargo, Período, Descrição
* Checkbox **"Trabalho atual"**
* Validação de datas

### 05 - Preview em Tempo Real

* Atualização instantânea
* Layout profissional do currículo

# 📄 CV Builder AI - Parte 2: Integração com Inteligência Artificial

Projeto de continuação do **CV Builder AI**, agora com integração de **Inteligência Artificial** para **melhoria automática de textos** em currículos. Esta etapa foca em UX avançada, integração com APIs externas e funcionalidades interativas.

---

## 🚀 Funcionalidades - Parte 2

### ✨ Botões Mágicos com IA
- **Localização**: Ao lado de textareas como resumo e descrições de experiência.
- **Funcionalidade**: Melhoria automática de textos usando IA.
- **Tecnologias**: [OpenAI GPT-4](https://openai.com/) ou [Google Gemini](https://deepmind.google/technologies/gemini/).
- **UX**: Estados de carregamento, animações e feedback visual.

---

## ✅ Requisitos Funcionais

### 01 - Integração com IA
- Botões "Melhorar" em campos de texto específicos.
- Processamento assíncrono com feedback visual.
- Melhoria contextual baseada no tipo de campo.
- Fallback gracioso em caso de erro da API.

### 02 - Melhorias de Texto com IA
- **Resumo Profissional**: Tom mais profissional com palavras-chave relevantes.
- **Descrições de Experiência**: Uso de verbos de ação e quantificação de resultados.
- **Correções**: Ortografia, gramática e fluência textual.
- **Otimização**: Maior densidade de informação e impacto comunicativo.

### 03 - Estados e Feedback UX
- Indicadores de carregamento (spinners).
- Notificações (toasts) para sucesso ou erro.
- Skeleton screens para carregamento de áreas.
- Transições e animações suaves para feedback visual.

---

## 🧪 Requisitos Extras (Opcionais)

### 📄 Exportação para PDF Profissional
Funcionalidade opcional para exportar o currículo em PDF com design profissional.

#### Funcionalidades PDF:
- **Formato**: Layout A4 otimizado para impressão.
- **Design**: Tipografia e espaçamento profissionais.
- **Download**: Geração automática com nome de arquivo personalizado.
- **Customização**: Suporte para temas de cores e layouts diferentes.

#### Tecnologias PDF:
- [`jsPDF`](https://github.com/parallax/jsPDF): Geração de PDFs no frontend.
- [`html2canvas`](https://github.com/niklasvh/html2canvas): Captura de elementos HTML para renderização no PDF.

---

## 🎯 Objetivos do Projeto

1. **Integrar APIs Externas** - Utilização de IA via OpenAI, Gemini, etc.
2. **Gerenciar Estados de Loading** - Feedback visual para processamento assíncrono.
3. **Criar Componentes Avançados** - Botões interativos, modais e ações dinâmicas.
4. **Otimizar Experiência do Usuário (UX)** - Animações, mensagens, e responsividade.
5. **Aplicar Boas Práticas de Segurança** - Uso de variáveis de ambiente e validação.
6. **(Opcional)** Implementar Exportação em PDF - Geração de currículos profissionais diretamente do frontend.
