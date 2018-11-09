import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const categories = [
      { id: 1, nome: 'Laser', description: 'Pagamento de contas da casa' },
      { id: 1, nome: 'Saude', description: 'Pagamento de contas da farcia' },
      { id: 1, nome: 'Salario', description: 'Pagamento de contas da empregada' },
      { id: 1, nome: 'Famila', description: 'Pagamento de contas do passeio' }
    ];
    return{
      categories
    };
  }
}
