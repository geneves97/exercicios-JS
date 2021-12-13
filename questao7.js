function arraysContainSame(a, b) {
    a = Array.isArray(a) ? a : [];
    b = Array.isArray(b) ? b : [];
    result = a.length === b.length && a.every(el => b.includes(el))
    console.log(result)
  }

arraysContainSame([1 ,2 ,3, 4],[1 ,2 ,3, 4])