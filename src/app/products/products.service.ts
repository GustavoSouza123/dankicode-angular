export interface IProduct {
  id: number;
  name: string;
  status: string;
}

export class ProductsService {
  private products: IProduct[] = [
    {
      id: 1,
      name: 'TV de 15 Polegadas',
      status: 'disponível',
    },
    {
      id: 2,
      name: 'Ar Condicionado',
      status: 'disponível',
    },
    {
      id: 3,
      name: 'Geladeira',
      status: 'indisponível',
    },
  ];

  getProducts() {
    return this.products;
  }

  getProduct(id: number) {
    return this.products.find((p) => p.id === id) as IProduct;
  }

  updateProduct(
    id: number | undefined,
    productInfo: { name: string; status: string }
  ) {
    const product = this.products.find((p) => p.id === id);

    if (product) {
      product.name = productInfo.name;
      product.status = productInfo.status;
    }
  }
}
