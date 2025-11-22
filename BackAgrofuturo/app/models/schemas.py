from pydantic import BaseModel
from typing import List, Dict, Any, Optional, Union

# Modelos de Ordenamiento
class SortRequest(BaseModel):
    data: List[float]
    algorithm: str  # "quick" o "merge"

class SortResponse(BaseModel):
    sorted_data: List[float]

# Modelos de Búsqueda
class SearchRequest(BaseModel):
    data: List[float]
    target: float

class SearchResponse(BaseModel):
    index: Optional[int]
    found: bool

# Modelos de Grafos
class GraphData(BaseModel):
    nodes: List[str]
    edges: Dict[str, Dict[str, float]] # Lista de adyacencia con pesos

class DijkstraRequest(BaseModel):
    graph: GraphData
    start_node: str

class DijkstraResponse(BaseModel):
    distances: Dict[str, float]

class TraversalRequest(BaseModel):
    graph: Dict[str, List[str]] # Lista de adyacencia para grafos no ponderados
    start_node: str

class TraversalResponse(BaseModel):
    path: List[str]

class FloydWarshallRequest(BaseModel):
    graph: GraphData

class FloydWarshallResponse(BaseModel):
    distances: Dict[str, Dict[str, float]] # claves de tupla convertidas a string para compatibilidad JSON

# Modelos de Clustering
class ClusteringRequest(BaseModel):
    data: List[List[float]]
    n_clusters: int = 3

class ClusteringResponse(BaseModel):
    labels: List[int]
    centers: List[List[float]]

# Modelos de Procesamiento
class ProcessingRequest(BaseModel):
    data: List[float]
    operation: str # "square", "double" para demostración

class ProcessingResponse(BaseModel):
    results: List[float]
