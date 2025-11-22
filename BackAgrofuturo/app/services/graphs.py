import heapq
from typing import Dict, List, Any, Set, Tuple

def dijkstra(graph: Dict[Any, Dict[Any, float]], start_node: Any) -> Dict[Any, float]:
    """
    Algoritmo de Dijkstra para caminos más cortos.
    Args:
        graph: Diccionario de adyacencia {nodo: {vecino: peso}}
        start_node: Nodo de inicio
    Returns:
        Diccionario de distancias más cortas desde start_node
    """
    distances = {node: float('infinity') for node in graph}
    distances[start_node] = 0
    pq = [(0, start_node)]
    
    while pq:
        current_distance, current_node = heapq.heappop(pq)
        
        if current_distance > distances[current_node]:
            continue
        
        for neighbor, weight in graph[current_node].items():
            distance = current_distance + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))
                
    return distances

def dfs(graph: Dict[Any, List[Any]], start_node: Any, visited: Set[Any] = None) -> List[Any]:
    """
    Búsqueda en Profundidad (DFS).
    Args:
        graph: Diccionario de adyacencia {nodo: [vecinos]}
        start_node: Nodo de inicio
        visited: Conjunto de nodos visitados
    Returns:
        Lista de nodos visitados en orden
    """
    if visited is None:
        visited = set()
    
    visited.add(start_node)
    result = [start_node]
    
    for neighbor in graph.get(start_node, []):
        if neighbor not in visited:
            result.extend(dfs(graph, neighbor, visited))
            
    return result

def bfs(graph: Dict[Any, List[Any]], start_node: Any) -> List[Any]:
    """
    Búsqueda en Anchura (BFS).
    Args:
        graph: Diccionario de adyacencia {nodo: [vecinos]}
        start_node: Nodo de inicio
    Returns:
        Lista de nodos visitados en orden
    """
    visited = {start_node}
    queue = [start_node]
    result = []
    
    while queue:
        vertex = queue.pop(0)
        result.append(vertex)
        
        for neighbor in graph.get(vertex, []):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
                
    return result

def floyd_warshall(graph: Dict[Any, Dict[Any, float]], nodes: List[Any]) -> Dict[Tuple[Any, Any], float]:
    """
    Algoritmo de Floyd-Warshall para caminos más cortos entre todos los pares.
    Args:
        graph: Diccionario de adyacencia {nodo: {vecino: peso}}
        nodes: Lista de todos los nodos
    Returns:
        Diccionario {(u, v): distancia}
    """
    dist = {}
    for u in nodes:
        for v in nodes:
            if u == v:
                dist[(u, v)] = 0
            elif v in graph.get(u, {}):
                dist[(u, v)] = graph[u][v]
            else:
                dist[(u, v)] = float('infinity')
                
    for k in nodes:
        for i in nodes:
            for j in nodes:
                if dist[(i, j)] > dist[(i, k)] + dist[(k, j)]:
                    dist[(i, j)] = dist[(i, k)] + dist[(k, j)]
                    
    return dist
