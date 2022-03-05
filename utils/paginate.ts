export function paginate(array:Array<any>, page_size=12, page_number:number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }