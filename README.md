Testes de Performance com JavaScript e K6

Introdução
Este repositório contém testes de performance realizados com a ferramenta K6, utilizando scripts em JavaScript. O objetivo é avaliar o desempenho de APIs e endpoints, garantindo a estabilidade e a eficiência do sistema sob diferentes cargas.

Tecnologias Utilizadas
•	JavaScript (para scripts de teste)
•	K6 (ferramenta de testes de carga)
•	Node.js (para possíveis scripts auxiliares)
•	GitHub (repositório de código)

Estrutura do Repositório
•	fixtures/- Pasta contendo os dados de acesso;
•	tests/- Pasta contendo os scripts de testes específicos para diferentes endpoints;
•	utils/- Pasta contendo funções reutilizáveis;
•	config/- Pasta contendo arquivo de configuração de variáveis de ambiente;
•	helpers/ -Pasta contendo arquivos auxiliares.

🎯 Objetivo de cada grupo de arquivo
•	tests/ – Scripts principais de teste que o K6 executará.
•	utils/ – Funções auxiliares, como geração de tokens ou manipulação de dados.
•	data/ – Dados estáticos ou dinâmicos usados durante os testes.
•	package.json – Lista dependências e scripts auxiliares.
•	README.md – Documentação e instruções de uso.

📥 Instalação
Antes de começar, instale as dependências necessárias:
# Clonar o repositório
git clone https://github.com/welkambabreu/banco-api-performance.git
cd banco-api-performance
# Instalar dependências
npm install


🚀 Execução dos Testes
O K6 exige que seja definida a variável de ambiente BASE_URL para apontar para o endpoint base da API a ser testada.

1. Executar teste simples
# Windows (PowerShell)
$env:BASE_URL = "https://sua-api.com"
k6 run tests/login.test.js

2. Execução com relatório em tempo real e exportação
O K6 possui um dashboard web integrado para acompanhar os testes em tempo real.
Exemplo no PowerShell:
$env:BASE_URL = "https://sua-api.com"
$env:K6_WEB_DASHBOARD = "true"
$env:K6_WEB_DASHBOARD_EXPORT = "html-report.html"
k6 run tests/login.test.js
Após a execução, o arquivo html-report.html conterá o relatório completo para consulta posterior.
