import React from "react";
import { Col, Row } from "antd";
import Link from "next/link";
import Image from "next/image";
import HeaderStyle from "./style";
import { useRouter } from "next/router";
const Header = () => {
    const router = useRouter();

    return (
        <HeaderStyle>
            <div className="container">
                <Row>
                    <Col span={24}>
                        <div className="header-menu">
                            <Link href="/">
                                <a
                                    className={`header-menu__home ${
                                        router.pathname === "/" ? "active" : ""
                                    }`}
                                >
                                    Home
                                </a>
                            </Link>

                            <div className="header-menu__github">
                                <a
                                    className="header-menu__github-item"
                                    href="https://github.com/swizaesar/social-media"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
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
