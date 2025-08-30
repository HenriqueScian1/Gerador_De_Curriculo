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
