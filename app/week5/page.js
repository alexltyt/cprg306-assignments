import Link from "next/link";
import ItemList from "./item-list.js";
import Item from "./item";

export default function Page() {
    return (
        <main>
            <p className="m-3 text-rose-600">
                <Link href="/">Back to Home</Link>
            </p>
            <ItemList />
        </main>
    );
};