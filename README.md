#APP

GymPass style app.

## RFs (Requisitos Funcionais)

- [] Deve ser possivel se cadastrar;
- [] Deve ser possivel se altenticar;
- [] Deve ser possivel obter o perfil de um usuário logado;
- [] Deve ser possivel obter o número de check-ins realizados pelo usuário
- [] Deve ser possivel o usuário obter seu histórco de check-ins
- [] Deve ser possive o usuário buscar academias próximas
- [] Deve ser possivel o usuário buscar academias pelo nome
- [] Deve ser possivel o usuário realizar o check-in em uma academia
- [] Deve ser possive validar o check-in de um usuário
- [] Deve ser possivel cadastrar uma academia

## (Regras de negócio)

- [] O usuário não deve poder se cadastrar com um e-mail duplicado
- [] O usuário não pode fazer 2 check-is no mesmo dia;
- [] O usuário não pode fazer check-in se não estiver perto (100m)
- [] O check-in só pode ser validade até 20 minutos após ser criado
- [] O check-in só pode ser validado por adminstradores
- [] A academia só pode ser cadastrada por administradores

## RNFs (Requisitos não funcionais)

- [] A senha do usuário precisa estar criptografada
- [] Os dados da aplicação precisam estar persistidos no banco de dado
- [] Todas as listas
