import fs from 'fs';
import path from 'path';
import DetailsPageCard from '@/components/DetailsPageCard';
import { notFound } from 'next/navigation';

const FriendDetailsPage = async ({ params }) => {
    const { id } = await params;
    const filePath = path.join(process.cwd(), 'public', 'data.json');
    const friends = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const friend = friends.find(f => f.id === Number(id));
    console.log("hlo......friend", friend);

    if (!friend) return notFound();

    return (
        <div>
            <DetailsPageCard friend={friend} />
        </div>
    );
};

export default FriendDetailsPage;