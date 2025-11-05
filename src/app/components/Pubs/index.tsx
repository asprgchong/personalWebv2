import '@/app/components/Pubs/pd.css';

type SimpleComponentProps = {title: string, journal: string, stack: string[], description: string, github: string, paper: string}
const SimpleComponent = ({title, journal, stack, description, github, paper}: SimpleComponentProps) => {
    return(
        <div className="card_pub relative h-50 ml-5 mr-5 w-5/6 mb-5 justify-items-start p-4">
            <div className='flex flex-col'>
                <a href="https://arxiv.org/pdf/2506.07667">
                    <p id="title" className="text-2xl font-medium">{title}</p>
                    <p id="journal" className='mt-2 text-xl font-normal'>{journal}</p>
                </a>
                    <p id="description" className='mt-2 text-lg'>{description}</p>
                    {/* <iframe src="https://arxiv.org/pdf/2506.07667" width="100%"></iframe> */}
            </div>
            <div className='items-center mt-5'>
                {
                    github != "" && paper != "" ? 
                    <>
                        <a href={github}>Github Repo</a><br/>
                        <a href={paper}>Read our paper on Arxiv here!</a>
                    </> : <></>
                }
            </div>
        </div>
    )
}

export default SimpleComponent;