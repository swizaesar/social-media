import React from "react";
import { CardAlbumStyle } from "./style";
import Link from "next/link";

const CardAlbum = ({ length = 10, id = 0, data = "" }) => {
    return (
        <Link href={`/photos/${data.id}`}>
            <a>
                <CardAlbumStyle className={length === id + 1 ? "last" : ""}>
                    <div className="card-text">{data.title}</div>
                </CardAlbumStyle>
            </a>
        </Link>
    );
};
export default CardAlbum;
