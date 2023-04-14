import { Button } from './button';
import { Container, HeaderContainer } from './container';
import { FigmaIcon } from './icons/figma';
import { GithubIcon } from './icons/github';

import Link from 'next/link';
import { Logo } from './icons/logo';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-10 w-full backdrop-blur-[12px]">
      <Container>
        <HeaderContainer className="flex items-center">
          <Link className="flex items-center text-2xl" href="/">
            <Logo className="mr-4 h-[24px] w-[80px]" />
          </Link>

          <div className="flex-grow  flex justify-center">
            <Button
              className="rounded-[15px] h-[46px] gap-[5px] w-[113px] font-bold flex items-center justify-center"
              href="https://www.figma.com/@mirageDS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FigmaIcon />
              Figma
            </Button>
          </div>

          <div className="ml-auto flex h-full items-center">
            <Button
              className="h-[46px] w-[113px] flex gap-[5px] font-bold items-center justify-center bg-primary600"
              href="https://github.com/Mirage-UI/mirage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
              Github
            </Button>
          </div>
        </HeaderContainer>
      </Container>
    </header>
  );
};
