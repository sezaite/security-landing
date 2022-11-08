function dataSort(data, sort) {
    switch(sort) {
        case 'count':
          return data.sort((a, b) => b.count - a.count);
        case 'abc':
          return data.sort((a, b) => a.value.localeCompare(b.value));
        default:
          console.error('Err: unrecognized sort type');
      }
}

export default dataSort;

