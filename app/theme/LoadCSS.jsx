const LoadCSS = ({ children }) => {
  return (
    <>
      <meta charSet="utf-8" />
      <title>FTB Bank</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        content="A fully featured admin theme which can be used to build CRM, CMS, etc."
        name="description"
      />
      <meta content="Coderthemes" name="author" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      {/* App favicon */}
      <link rel="shortcut icon" href="/static/assets/images/favicon.ico" />
      {/* Bootstrap css */}
      <link
        href="/static/assets/css/bootstrap.min.css"
        rel="stylesheet"
        type="text/css"
      />
      {/* App css */}
      <link
        href="/static/assets/css/app.min.css"
        rel="stylesheet"
        type="text/css"
        id="app-style"
      />
      {/* icons */}
      <link
        href="/static/assets/css/icons.min.css"
        rel="stylesheet"
        type="text/css"
      />
      {/* Head js */}
      {children}
    </>
  );
};

export default LoadCSS;
