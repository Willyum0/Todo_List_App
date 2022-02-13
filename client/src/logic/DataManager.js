
export function getData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          []
        );
      }, 10000);
    }); 
  }