import Login from '@/components/auth/login';
import Register from '@/components/auth/register';
import Social from '@/components/auth/social';
import { Card } from '@/components/ui/card';
import { useAuthState } from '@/store/auth-store';

const Auth = () => {
	const { authState } = useAuthState();
	return (
		<div className='w-full h-screen bg-gradient-to-t from-foreground to-background flex justify-center items-center'>
			<Card className='p-8 w-1/3'>
				{authState === 'login' && <Login />}
				{authState === 'register' && <Register />}
				<Social />
			</Card>
		</div>
	);
};

export default Auth;
