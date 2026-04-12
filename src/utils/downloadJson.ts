export const generarArchivoPedido = (items: any[]) => {
  // 1. Mapeamos la lista de productos con el formato solicitado
  const detalleProductos = items.map(item => {
    const precioUnitario = Number(item.prices[0].price.replace(/\./g, ''));
    
    return {
      Producto: item.displayName,
      cantidad: item.quantity,
      precio_unitario: precioUnitario,
      precio_total: precioUnitario * item.quantity
    };
  });

  const totalPagado = detalleProductos.reduce((acc, item) => acc + item.precio_total, 0);
  const unidadesTotales = detalleProductos.reduce((acc, item) => acc + item.cantidad, 0);

  const pedidoCompleto = {
    items: detalleProductos,
    totalProducts: unidadesTotales,
    Total: totalPagado
  };

  const blob = new Blob([JSON.stringify(pedidoCompleto, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `pedido-sodimac-${Date.now()}.json`;
  link.click();
  
  URL.revokeObjectURL(url);
};