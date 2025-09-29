import * as React from "react";
import { ReactElement } from "react";



export default function MyButton({ children }: { children: ReactElement }) {


    return (

        <div className="btn btn-primary">
            {children}
        </div>


    );
}