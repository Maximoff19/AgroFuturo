from typing import List, Any

def quick_sort(arr: List[Any], key=lambda x: x) -> List[Any]:
    """
    Implementación del algoritmo QuickSort.
    Args:
        arr: Lista de elementos a ordenar
        key: Función para extraer la clave de comparación de los elementos
    Returns:
        Lista ordenada
    """
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if key(x) < key(pivot)]
    middle = [x for x in arr if key(x) == key(pivot)]
    right = [x for x in arr if key(x) > key(pivot)]
    
    return quick_sort(left, key) + middle + quick_sort(right, key)

def merge_sort(arr: List[Any], key=lambda x: x) -> List[Any]:
    """
    Implementación del algoritmo MergeSort.
    Args:
        arr: Lista de elementos a ordenar
        key: Función para extraer la clave de comparación de los elementos
    Returns:
        Lista ordenada
    """
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid], key)
    right = merge_sort(arr[mid:], key)
    
    return _merge(left, right, key)

def _merge(left: List[Any], right: List[Any], key) -> List[Any]:
    sorted_arr = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if key(left[i]) <= key(right[j]):
            sorted_arr.append(left[i])
            i += 1
        else:
            sorted_arr.append(right[j])
            j += 1
            
    sorted_arr.extend(left[i:])
    sorted_arr.extend(right[j:])
    
    return sorted_arr
