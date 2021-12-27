import Loader from 'react-loader-spinner'

export const Spinner: React.FC = () => {
  return (
    <div className="spinner">
      <Loader
        type="Oval"
        color="#E5F2E5"
        height={30}
        width={30}
      />
    </div>
  );
}
