import React from "react";
import { Col, Row } from "antd";
import Link from "next/link";
import HeaderStyle from "./style";
import { useRouter } from "next/router";
const Header = () => {
    const router = useRouter();
    const menus = [
        {
            label: "Users",
            url: "/users",
        },
        {
            label: "Albums",
            url: "/albums",
        },
        {
            label: "Comments",
            url: "/comments",
        },
        {
            label: "Photos",
            url: "/photos",
        },
        {
            label: "Post",
            url: "/post",
        },
    ];
    return (
        <HeaderStyle>
            <div className="container">
                <Row>
                    <Col span={24}>
                        <div className="header-menu">
                            <div className="header-menu__home">
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </div>
                            <ul className="header-menu__list">
                                {menus.map((item, key) => {
                                    return (
                                        <li key={key}>
                                            <Link href={item.url}>
                                                <a
                                                    className={`header-menu__list-item ${
                                                        router.pathname ===
                                                        item.url
                                                            ? "active"
                                                            : ""
                                                    }`}
                                                >
                                                    {item.label}
                                                </a>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="header-menu__github">
                                <a
                                    className="header-menu__github-item"
                                    href="https://github.com/swizaesar/social-media"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="/images/github.png"
                                        alt="github"
                                    />
                                    Github
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </HeaderStyle>
    );
};
export default Header;
