import Layout from '../app/layout';
import { getHeaders } from '../lib/utils';

function Page() {
  return (
    <Layout>
      <h1>Gym Website</h1>
      <ul>
        {getHeaders().map((header) => (
          <li key={header.name}>
            <Link href={header.href}>
              <a>{header.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default Page;
```

To get started, navigate to your project directory and run the following command to create a new Next.js project:

```bash
npx create-next-app my-gym-website
```

Then, replace the existing files with the code above.

To run your application, navigate to your project directory and run the following command:

```bash
npm run dev