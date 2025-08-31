import {
  useEffect,
} from "react";

interface NotificationProps {
  title: string;
  message: string;
  onClose: () => void;
  duration?: number;
}

const Notification = ({
  title, message, onClose, duration = 5000,
}: NotificationProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div
      className="fixed top-26 left-6 z-50"
    >
      <div
        className="alert alert-soft alert-success flex items-center gap-4"
        role="alert"
      >
        <span
          className="icon-[tabler--circle-check] shrink-0 size-6"
        />
        <div
          className="flex flex-col"
        >
          <span
            className="text-lg font-semibold"
          >
            {title}
          </span>
          {" "}
          {message}
        </div>
      </div>
    </div>
  );
};

export default Notification;
