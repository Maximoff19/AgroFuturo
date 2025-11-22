# Backend de Agrofuturo :)

Este es el backend para la aplicación Agrofuturo, desarrollado con Python y FastAPI. El sistema implementa varios algoritmos para el análisis de datos agrícolas y expone una API REST para su consumo.

## Características

### Algoritmos Principales
- **Ordenamiento**: QuickSort y MergeSort para organizar grandes volúmenes de datos meteorológicos y de suelo.
- **Búsqueda**: Búsqueda Binaria para encontrar datos específicos eficientemente.
- **Grafos**: Dijkstra, DFS, BFS y Floyd-Warshall para análisis espacial, conectividad entre zonas y rutas óptimas.
- **Clustering**: K-means para agrupar zonas agrícolas con características similares.
- **Procesamiento**: Patrón "Divide y Vencerás" para simular procesamiento paralelo de datos.

## Instalación y Ejecución

1. **Instalar Dependencias**:
   Asegúrate de tener Python instalado. Luego ejecuta:
   ```bash
   pip install -r requirements.txt
   ```

2. **Iniciar el Servidor**:
   ```bash
   uvicorn app.main:app --reload
   ```

3. **Documentación de la API (Swagger UI)**:
   Abre tu navegador y ve a `http://127.0.0.1:8000/docs` para ver la documentación interactiva y probar los endpoints.

## Pruebas

Para ejecutar las pruebas automatizadas:
```bash
PYTHONPATH=. pytest tests/test_main.py
```
