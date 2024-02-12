const getInitials = (name: string) => {
  const names = name.split(" ");
  return names
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

const ProfileImage = ({ name }: { name: string }) => {
  const initials = getInitials(name);
  const bgColor = "#007bff"; // Color backgroundColor avatar
  return (
    <div
      className="w-full h-full rounded-full flex items-center justify-center"
      style={{ backgroundColor: bgColor, height: 40 }} // Añade margen superior
      title={initials}
    >
      <span className="text-white font-bold text-xl">{initials}</span>
    </div>
  );
};

export default ProfileImage;
