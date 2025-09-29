import React from "react";

export function MyButton({ label }: { label: string }) {
    return <button className="btn btn-primary">{label}</button>;
}