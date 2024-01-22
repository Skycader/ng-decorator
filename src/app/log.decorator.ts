export function printLog(
  target: Object,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  // Store Original Method Implemetation
  const originalMethod = descriptor.value;

  // Now, over-write the original method
  descriptor.value = function (...args: any[]) {
    // Call original function
    const result = originalMethod.apply(this, args);
    // Execute custom logic
    console.log(`-- ${propertyName}() returned: `, result);
    return result;
  };
  return descriptor;
}
