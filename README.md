<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://repository-images.githubusercontent.com/160067449/cdc5a000-b305-11e9-9f4e-e2273bfb33fe" width="320" alt="Nest Logo" /></a>
</p>

## Descrição
Exemplo de API desenvolvida em Nest + Prisma para sistema de venda feito em Flutter

## Instalacao
```bash
# sobe os containers
$ docker-compose up
# cria e executa a primeira migracao para criar as tabelas
$ npx prisma migrate dev --preview-feature
```

## Urls
- [Swagger](http://localhost:3000/api/)
- [pgAdmin](http://localhost:9000/)
- [Prisma Studio](http://localhost:5555/)

## Alguns comandos do Prisma

```bash
# abre o container da aplicacao
$ docker-compose exec app bash

# Roda o editor visual do prisma
$ npx prisma studio

# cria e executa uma migracao
$ npx prisma migrate dev --preview-feature

# redefine o banco de dados e executa a migracao
$ npx prisma migrate reset --preview-feature
```
## Documentações
- [Nest](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
