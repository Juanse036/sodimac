# Prueba Desarrollador Front End - SODIMAC

## Procedimiento para ejecutar la aplicación

```bash
git clone https://github.com/Juanse036/sodimac
cd sodimac
npm install
npm run dev
```

La aplicación estará disponible en **http://localhost:5173**.

## Decisiones Técnicas Tomadas

Para este desarrollo, se priorizó una arquitectura escalable y mantenible:

1. **React Context API para el Estado Global**  
   Se implementó un `CartProvider` para gestionar el estado del carrito. Esto permite que el Navbar, ProductDetail y Cart estén siempre sincronizados.

2. **Persistencia en LocalStorage**  
   Para cumplir con el requerimiento de "guardar en memoria al cerrar el aplicativo", el estado inicial del carrito consulta el localStorage y cada cambio se persiste mediante un `useEffect`, garantizando que el usuario no pierda su selección al refrescar o cerrar la pestaña.

3. **Estilos**  
   Se optó por **CSS Modules** para garantizar el encapsulamiento de estilos. Esto evita colisiones de clases y facilita el mantenimiento a largo plazo, permitiendo que cada página y componente tenga sus propias reglas de diseño aisladas.

4. **TypeScript**  
   El uso de interfaces para los productos y el estado del carrito previene errores en tiempo de desarrollo y facilita la integración con la API, asegurando que los datos (como precios y URLs de imágenes) se manejen correctamente en toda la app.

5. **Exportación de Datos (JSON)**  
   Se desarrolló una utilidad nativa en JS para generar y descargar un archivo JSON con el resumen del pedido.

6. **UX y Manejo de Errores**  
   Se incluyeron estados de carga (**Loader**), páginas de error **404** y un flujo de "Producto no encontrado" para asegurar que el usuario nunca se sienta perdido ante una URL inválida.

## Stack Tecnológico

El proyecto ha sido desarrollado siguiendo estrictamente las versiones y herramientas solicitadas en el requerimiento técnico:

- **React 17.0.2**: Se garantizó la compatibilidad de los componentes y hooks con esta versión específica.
- **Node 14.18.1**: El entorno de ejecución y la gestión de dependencias se alinearon con esta versión de Node.
- **TypeScript**: Se utilizó para el tipado estático de todo el flujo de datos del carrito y catálogo.
- **Vite**: Se configuró como herramienta de construcción y servidor de desarrollo para asegurar un entorno ágil y moderno.

---
✅ **Testeada exitosamente en:**
- Node **14.18.1** (versión requerida)
- Node **22.21.0** (versión moderna)
---

**Desarrollado por:**  
**Juan Sebastián García**  
*Desarrollador Front End*  
📞 **311 255 1755**  
✉️ [juansebas036@gmail.com](mailto:juansebas036@gmail.com)