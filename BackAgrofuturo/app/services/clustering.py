from typing import List, Dict, Any
import numpy as np
from sklearn.cluster import KMeans

def k_means_clustering(data: List[List[float]], n_clusters: int = 3) -> Dict[str, Any]:
    """
    Implementación de clustering K-means usando scikit-learn.
    Args:
        data: Lista de puntos de datos (ej. [[temp, humedad], ...])
        n_clusters: Número de clusters a formar
    Returns:
        Diccionario con etiquetas de clusters y centros
    """
    if not data:
        return {"labels": [], "centers": []}
        
    X = np.array(data)
    kmeans = KMeans(n_clusters=n_clusters, random_state=42, n_init=10)
    kmeans.fit(X)
    
    return {
        "labels": kmeans.labels_.tolist(),
        "centers": kmeans.cluster_centers_.tolist()
    }
