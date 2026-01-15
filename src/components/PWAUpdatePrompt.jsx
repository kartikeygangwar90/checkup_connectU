import { useEffect, useState } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import toast from 'react-hot-toast';

const PWAUpdatePrompt = () => {
    const [showReload, setShowReload] = useState(false);

    const {
        needRefresh: [needRefresh, setNeedRefresh],
        updateServiceWorker,
    } = useRegisterSW({
        onRegisteredSW(swUrl, r) {
            console.log('SW Registered:', swUrl);
            // Check for updates every 30 seconds
            if (r) {
                setInterval(() => {
                    r.update();
                }, 30 * 1000);
            }
        },
        onRegisterError(error) {
            console.log('SW registration error:', error);
        },
    });

    useEffect(() => {
        if (needRefresh) {
            setShowReload(true);
            toast(
                (t) => (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span>🔄 New version available!</span>
                        <button
                            onClick={() => {
                                updateServiceWorker(true);
                                toast.dismiss(t.id);
                            }}
                            style={{
                                background: '#3b82f6',
                                color: 'white',
                                border: 'none',
                                padding: '0.5rem 1rem',
                                borderRadius: '0.5rem',
                                cursor: 'pointer',
                                fontWeight: 600
                            }}
                        >
                            Update
                        </button>
                    </div>
                ),
                {
                    duration: Infinity,
                    id: 'pwa-update',
                }
            );
        }
    }, [needRefresh, updateServiceWorker]);

    // Also show a persistent banner
    if (showReload) {
        return (
            <div style={{
                position: 'fixed',
                bottom: '1rem',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#1f2937',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
            }}>
                <span style={{ color: 'white' }}>🆕 Update available</span>
                <button
                    onClick={() => {
                        updateServiceWorker(true);
                        setShowReload(false);
                    }}
                    style={{
                        background: '#3b82f6',
                        color: 'white',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.5rem',
                        cursor: 'pointer',
                        fontWeight: 600
                    }}
                >
                    Refresh Now
                </button>
                <button
                    onClick={() => setShowReload(false)}
                    style={{
                        background: 'transparent',
                        color: '#9ca3af',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '1.25rem'
                    }}
                >
                    ×
                </button>
            </div>
        );
    }

    return null;
};

export default PWAUpdatePrompt;
