const log = () => {
  return function(
    target: Object,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<any>
  ) {
    // console.log(descriptor);
    // Keep the reference to the original function
    let originalFunction = descriptor.value || descriptor.get;

    // Wrap the call to the original function to log
    function wrapper() {
      const startedAt = +new Date();
      const returnValue = originalFunction.apply(this);
      const endedAt = +new Date();

      console.log(
        `${propertyKey} executed in ${endedAt - startedAt} milliseconds`
      );

      return returnValue;
    }

    // Reassings the original function to reference the wrapper
    if (descriptor.value) descriptor.value = wrapper;
    else if (descriptor.get) descriptor.get = wrapper;
  };
};

export default log;
