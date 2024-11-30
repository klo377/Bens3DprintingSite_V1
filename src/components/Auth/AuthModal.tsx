import React from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../../lib/supabase';
import { Card } from '../Card';

export function AuthModal() {
  return (
    <Card>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={['google', 'github']}
        redirectTo={window.location.origin}
        showLinks={false}
        view="magic_link"
        magicLink={true}
      />
    </Card>
  );
}