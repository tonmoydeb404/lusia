function isObject(item: unknown): item is Record<string, unknown> {
  return typeof item === "object" && item !== null && !Array.isArray(item);
}

function isArray(item: unknown): item is unknown[] {
  return Array.isArray(item);
}

export function deepMerge<T, U>(target: T, source: U): T & U {
  const result: Record<string, unknown> = { ...(target as object) };

  for (const key in source as object) {
    const sourceValue = (source as Record<string, unknown>)[key];
    const targetValue = (target as Record<string, unknown>)[key];

    if (isArray(sourceValue)) {
      result[key] = isArray(targetValue)
        ? [...targetValue, ...sourceValue]
        : [...sourceValue];
    } else if (isObject(sourceValue) && isObject(targetValue)) {
      result[key] = deepMerge(targetValue, sourceValue);
    } else {
      result[key] = sourceValue;
    }
  }

  return result as T & U;
}
