from typing import List, Callable, Any
import concurrent.futures

def divide_and_conquer(data: List[Any], process_func: Callable[[Any], Any], max_workers: int = 4) -> List[Any]:
    """
    Implementación del patrón Divide y Vencerás usando procesamiento paralelo.
    Args:
        data: Lista de elementos a procesar
        process_func: Función a aplicar a cada elemento
        max_workers: Número de trabajadores paralelos
    Returns:
        Lista de resultados procesados
    """
    if not data:
        return []
        
    # Dividir: Separar datos en trozos (manejado implícitamente por ThreadPoolExecutor)
    # Vencer: Procesar elementos en paralelo
    results = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as executor:
        # Map preserva el orden
        results = list(executor.map(process_func, data))
        
    # Combinar: Los resultados ya están combinados en la lista
    return results
