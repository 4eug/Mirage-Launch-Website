import classNames from 'classnames';

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={classNames('mx-auto max-w-[120rem] px-8', className)}>
      {children}
    </div>
  );
};

export const HeaderContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={classNames(
        'mx-auto px-[2px] py-[16px] lg:px-[92px] lg:py-[8px]',
        className
      )}
    >
      {children}
    </div>
  );
};

export const FooterContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={classNames(
        'mt-32  bottom-10 w-full flex justify-center items-center text-center',
        className
      )}
    >
      {children}
    </div>
  );
};
