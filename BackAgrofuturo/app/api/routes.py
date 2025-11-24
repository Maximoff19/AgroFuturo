from fastapi import APIRouter, HTTPException
from app.models.schemas import *
from app.services import sorting, search, graphs, clustering, processing
import math

router = APIRouter()

@router.post("/sort", response_model=SortResponse)
async def sort_data(request: SortRequest):
    if request.algorithm == "quick":
        sorted_arr = sorting.quick_sort(request.data)
    elif request.algorithm == "merge":
        sorted_arr = sorting.merge_sort(request.data)
    else:
        raise HTTPException(status_code=400, detail="Algoritmo inválido. Use 'quick' o 'merge'")
    return SortResponse(sorted_data=sorted_arr)

@router.post("/search", response_model=SearchResponse)
async def search_data(request: SearchRequest):
    # Asegurar que los datos estén ordenados para la búsqueda binaria
    sorted_data = sorting.quick_sort(request.data)
    index = search.binary_search(sorted_data, request.target)
    return SearchResponse(index=index, found=index is not None)

@router.post("/graph/dijkstra", response_model=DijkstraResponse)
async def run_dijkstra(request: DijkstraRequest):
    distances = graphs.dijkstra(request.graph.edges, request.start_node)
    # Convertir infinito a string o número grande para serialización JSON si es necesario,
    # pero Pydantic maneja float('inf') como null o similar en algunas versiones.
    # Mantengámoslo como float, pero manejemos posibles problemas de serialización.
    # Por seguridad, reemplacemos inf con -1 o un número grande si es necesario, pero el JSON estándar permite null.
    # En realidad, el JSON estándar no soporta Infinity. Reemplacemos con None o -1.
    clean_distances = {k: (v if v != float('inf') else -1) for k, v in distances.items()}
    return DijkstraResponse(distances=clean_distances)

@router.post("/graph/dfs", response_model=TraversalResponse)
async def run_dfs(request: TraversalRequest):
    path = graphs.dfs(request.graph, request.start_node)
    return TraversalResponse(path=path)

@router.post("/graph/bfs", response_model=TraversalResponse)
async def run_bfs(request: TraversalRequest):
    path = graphs.bfs(request.graph, request.start_node)
    return TraversalResponse(path=path)

@router.post("/graph/floyd-warshall", response_model=FloydWarshallResponse)
async def run_floyd_warshall(request: FloydWarshallRequest):
    distances = graphs.floyd_warshall(request.graph.edges, request.graph.nodes)
    # Convertir claves de tupla a string para JSON
    json_distances = {}
    for (u, v), dist in distances.items():
        key = f"{u},{v}"
        json_distances.setdefault(u, {})[v] = (dist if dist != float('inf') else -1)
    return FloydWarshallResponse(distances=json_distances)

@router.post("/graph/bellman-ford", response_model=BellmanFordResponse) #bellman-ford
async def run_bellman_ford(request: BellmanFordRequest):
   
    try:
        distances = graphs.bellman_ford(request.graph.edges, request.start_node)
        return BellmanFordResponse(distances=distances, has_negative_cycle=False)
    except ValueError as e:
        if "ciclo negativo" in str(e):
            return BellmanFordResponse(distances={}, has_negative_cycle=True)
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/clustering", response_model=ClusteringResponse)
async def run_clustering(request: ClusteringRequest):
    result = clustering.k_means_clustering(request.data, request.n_clusters)
    return ClusteringResponse(labels=result["labels"], centers=result["centers"])

@router.post("/process", response_model=ProcessingResponse)
async def run_processing(request: ProcessingRequest):
    if request.operation == "square":
        func = lambda x: x * x
    elif request.operation == "double":
        func = lambda x: x * 2
    else:
        raise HTTPException(status_code=400, detail="Operación inválida")
        
    results = processing.divide_and_conquer(request.data, func)
    return ProcessingResponse(results=results)
