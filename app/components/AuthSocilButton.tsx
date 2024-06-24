import { IconType } from 'react-icons'

interface AuthSocilButtonProps {
    icon: IconType;
    onClick: () => void;
}

const AuthSocilButton: React.FC<AuthSocilButtonProps> = ({
    icon: Icon,
    onClick
}) => {
    return ( 
        <button
            type="button"
            onClick={onClick}
            className='
                inline-flex
                w-full
                justify-center
                rounded-md
                bg-white
                px-4
                py-2
                text-gray-500
                shadow-sm
                ring-1
                ring-insert
                ring-gray-300
                hover:bg-gray-50
                focus:outline-0
            '
        >
            <Icon />
        </button>
    );
}

export default AuthSocilButton;