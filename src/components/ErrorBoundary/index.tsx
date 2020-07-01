import * as React from 'react';

type Props = Record<string, unknown>;
type State = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<Props, State> {
  private constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, info: React.ErrorInfo): void {
    // TODO: Sentry に送る
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error', error, info);
  }

  public render(): React.ReactNode {
    const { hasError } = this.state;
    if (hasError) {
      // TODO: Fallback コンポーネントに置き換える
      return <h1>Something went wrong.</h1>;
    }
    const { children } = this.props;
    return children;
  }
}
