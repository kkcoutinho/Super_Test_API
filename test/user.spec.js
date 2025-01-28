//Bibliotecas e frameworks:
// Instalei: npm i jest
// Instalei: npm install supertest -- save-dev
// npx jest para rodar o teste
// Post: só criação de informações
// Get: só leitura de informações
// Put: atualização de informações
// Delete: exclusão de informações

const superTest = require('supertest');

describe('API PetStore Swagger - Entidade User', () => {
    const request = superTest('https://petstore.swagger.io/v2');
    const massaUser = require('../users/massaUser');

    it('POST User', () => {
        const user = require('../users/user.json');

        return request
            .post('/user')
            .send(user)
            .then((res) => {
                expect(res.status).toBe(200);
                expect(res.body.code).toBe(200);
                expect(res.body.type).toBe('unknown');
                expect(res.body.message).toBe(user.id.toString());
            });
    });

    // Método POST que lê e cria 3 usuários
    // Utilizei o site: www.csvjson.com/csv2json p gerar o json (massa de 3 usuários, colado do bloco de notas) >> users/massaUser.js
    it.each(massaUser.array.map(elemento => [
            elemento.id,
            elemento.username,
            elemento.firstName,
            elemento.lastName,
            elemento.email,
            elemento.password,
            elemento.phone
    ]))('POST Multiplos Users', (id, username, firstName, lastName, email, password, phone) => {
        const user = {
            "id": id,
            "username": username,
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password,
            "phone": phone
        };

        return request
            .post('/user')
            .send(user)
            .then((res) => {
                expect(res.status).toBe(200);
                expect(res.body.code).toBe(200);
                expect(res.body.type).toBe('unknown');
            });
    });
    



    it('GET User', () => {
        const username = 'kacoutinho';

        return request
            .get(`/user/${username}`)
            .then((res) => {
                expect(res.status).toBe(200);
                expect(res.body.username).toBe('kacoutinho');
                expect(res.body.firstName).toBe('Katia');
                expect(res.body.lastName).toBe('Coutinho');
                expect(res.body.email).toBe('kacoutinho@petstore.com.br');
                expect(res.body.password).toBe('@kacoutinho123');
                expect(res.body.phone).toBe('11981758000');
            });
    });

    it('PUT User', () => {
        const user = require('../users/userPut.json');

        return request
            .put('/user/kacoutinho')
            .send(user)
            .then((res) => {
                expect(res.status).toBe(200);
                expect(res.body.code).toBe(200);
                expect(res.body.type).toBe('unknown');
                expect(res.body.message).toBe(user.id.toString());
                return request
                    .get('/user/kacoutinho')
                    .then((res) => {
                        expect(res.status).toBe(200);
                        expect(res.body.password).toBe(user.password);
                    });
            });
    });

    it('DELETE User', () => {
        return request
            .delete('/user/kacoutinho')
            .then((res) => {
                expect(res.status).toBe(200);
                expect(res.body.code).toBe(200);
                expect(res.body.type).toBe('unknown');
                expect(res.body.message).toBe('kacoutinho');
            });
    });
});