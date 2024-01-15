export const fetchProducts = async () => {
    try {
      
      await new Promise(resolve => setTimeout(resolve, 1000));
  
      
      const products = [
        { id: 1, name: 'Teclado Mecánico Gaming', price: 89.99, category: 'peripherals', image: 'keyboard.jpg' },
        { id: 2, name: 'Mouse Gamer RGB', price: 49.99, category: 'peripherals', image: 'mouse.jpg' },
        { id: 3, name: 'Auriculares Inalámbricos para Gaming', price: 129.99, category: 'audio', image: 'headphones.jpg' },
        
      ];
  
      return products;
    } catch (error) {
      
      console.error('Error al obtener productos:', error);
      throw new Error('Error al obtener productos');
    }
  };