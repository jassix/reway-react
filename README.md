# 🌐 reway-react
<br/>[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/jassix)
##### 💨 Reway implementation for ReactJS.

---

#### How to use?

1. **Install** library from npm

    ```bash
    yarn add @reway/react
    ```

2. **Write** a simple case:

    ```tsx
    // store/user.ts
   
    import { atom } from '@reway/core';
   
    export const name = atom<string>("Jack");
   
    // components/MyName.tsx
   
    import React from 'react';
    import { useAtom } from "@reway/react";
    import { name } from '../store/user';
   
    export const MyName = () => {
      const name = useAtom(name)
   
      return (
        <h1>Hello my name is {name}</h1>
      )  
    }
    ```


---

#### Contribution

The library needs your activity! We welcome any help.