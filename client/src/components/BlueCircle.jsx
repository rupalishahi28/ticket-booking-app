

const BlueCircle = ({top = "auto", left = "auto", right = "auto", bottom = "auto"}) => {
  return (
        <div className="absolute -z-50 h-58 w-58 aspect-sqaure rounded-full bg-primary/30 blur-3xl" style={{top, left, right, bottom}}>

        </div>
    );
}

export default BlueCircle;