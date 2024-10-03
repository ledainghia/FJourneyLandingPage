import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "ShiftKey - Software & Startup Premium Landing Page Template Blog"}
                </title>
            </Head>
        </>
    )
}

export default PageHead