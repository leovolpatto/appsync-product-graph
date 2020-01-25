# tks-graph-test
# Instalação
instalar o AWS SAM CLI, seguir os passos:
https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install-linux.html

No repositório, instalar as dependências:
npm install

# Build
Na raiz do projeto:
./build.sh

# Teste
O teste do código pode ser feito com "jest", na pasta /lambda

# Debug
sam local invoke [FUNCTION_IDENTIFIER] -d [port] -e [event path]
O "event path" é um .json com o payload que deve ser enviado ao debugar
Por exemplo, o código lambda/src/lambda/ProductSource/app.ts pode ser debugado a partir da raiz com:
sam local invoke ProductSource -d 3000 -e debugProduct.json

# Deploy
Configurar o nome do "stack_name", do "s3_bucket" e o prefix "s3_prefix" no samconfig.toml
Fazer deploy com "sam deploy"

# Consumir
Acessar https://console.aws.amazon.com/appsync
Abrir seu projeto, ir em settings, copiar o API URL e criar uma API Key

em Queries, testar a query:
	query{
	  getProduct(Id:336715){
	    Id
	    Nome
	    Descricao
	  }
	}

Essa mesma query pode ser feita pelo terminal de comando com:
curl -XPOST -H "Content-Type:application/graphql" -H "x-api-key:INSERIRAPIKEYAQUI" -d '{ "query": "query{getProduct(Id:336715){Nome}}" }' INSERIRAPIURLAQUI