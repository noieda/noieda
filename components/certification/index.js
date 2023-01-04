import Link from "next/link";

export default function Certification() {
    return (
        <div className='w-auto experience pt-20'>
          <h1>Certification</h1>
          <div className="my-8">
            <Link href="https://www.credential.net/3395fbd1-a2bd-4732-8853-8c9caa919f5b">
                <a target="_blank" rel="noopener noreferrer">
                <h2>Google Cloud Platform - Professional Cloud Architect</h2>
            </a></Link>
            <p>as a cloud architect, i assess key technical job functions and advanced skills in design, implementation and management of solutions using google cloud.</p>
            <Link href="https://www.credential.net/0c842dc1-1ff0-469c-acce-a19d66a9c2e0">
                <a target="_blank" rel="noopener noreferrer">
                <h2>Google Cloud Platform - Associate Cloud Engineer</h2>
            </a></Link>
            <p>as an associate cloud engineer, i assesses the fundamental skills to deploy and maintain cloud projects.</p>
          </div>
        </div>
    )
}