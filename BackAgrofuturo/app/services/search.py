from typing import List, Any, Optional

def binary_search(arr: List[Any], target: Any, key=lambda x: x) -> Optional[int]:
    """
    Implementación del algoritmo de Búsqueda Binaria.
    Args:
        arr: Lista ordenada de elementos
        target: Elemento a buscar
        key: Función para extraer la clave de comparación de los elementos
    Returns:
        Índice del elemento si se encuentra, None en caso contrario
    """
    low = 0
    high = len(arr) - 1
    
    while low <= high:
        mid = (low + high) // 2
        mid_val = key(arr[mid])
        target_val = key(target) if not isinstance(target, (int, float, str)) else target
        
        if mid_val < target_val:
            low = mid + 1
        elif mid_val > target_val:
            high = mid - 1
        else:
            return mid
            
    return None
