'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import type { Theme, Appearance } from '@clerk/types';
import { useTheme } from 'next-themes';
import type { ComponentProps, JSX } from 'react';

export function AuthProvider(
  props: ComponentProps<typeof ClerkProvider>
): JSX.Element {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const baseTheme = isDark ? dark : undefined;

  const layout: Appearance['layout'] = {
    animations: true,
    showOptionalFields: true,
    socialButtonsPlacement: 'top',
    socialButtonsVariant: 'blockButton',
    termsPageUrl: '/legal/terms-and-conditions',
    privacyPageUrl: '/legal/privacy-policy',
    helpPageUrl: '/contact',
    logoPlacement: 'none',
    //logoImageUrl: '',
    shimmer: true,
    unsafe_disableDevelopmentModeWarnings: true,
  };

  const variables: Appearance['variables'] = {
    colorPrimary: isDark ? '#0a2b45' : '#0a2b45',
    colorDanger: isDark ? '#a50000' : '#e3342f',
    colorSuccess: isDark ? '#007734' : '#00bc7d',
    colorWarning: isDark ? '#fd9a00' : '#fd9a00',
    colorNeutral: isDark ? '#ffffff' : '#3d4d5c',
    colorText: isDark ? '#01ffff' : '#01ffff',
    colorTextSecondary: isDark ? '#ffffff' : '#ffffff',
    colorTextOnPrimaryBackground: isDark ? '#e0e0e0' : '#ffffff',
    colorBackground: isDark ? '#3d4d5c' : '#0a2b45',
    colorInputBackground: isDark ? '#0a2b45' : '#0a2b45',
    colorInputText: isDark ? '#ffffff' : '#ffffff',
    colorShimmer: isDark ? '#5b5f85' : '#021221',
    fontFamily: 'inherit',
    fontWeight: {
      normal: 500,
      medium: 800,
      bold: 900,
    },
    borderRadius: '0.625rem',
    spacingUnit: '1rem',
    fontSize: '0.875rem',
  };

  const elements: Theme['elements'] = {
    dividerLine: 'bg-border',
    socialButtonsIconButton: 'bg-card',
    navbarButton: 'text-foreground',
    organizationSwitcherTrigger__open: 'bg-background',
    organizationPreviewMainIdentifier: 'text-foreground',
    organizationSwitcherTriggerIcon: 'text-muted-foreground',
    organizationPreview__organizationSwitcherTrigger: 'gap-2',
    organizationPreviewAvatarContainer: 'shrink-0',
    formButtonPrimary: {
      background: isDark ? '#0a2b45' : '#3d4d5c',
      fontWeight: 'medium',
      fontSize: '0.875rem',
      border: '1px solid #01ffff',
      borderRadius: '0.5rem',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        background: isDark ? '#021221' : '#021221',
        outline: '2px ridge #01ffff',
      },
      '&:focus': {
        borderColor: '#01ffff',
        outline: '2px solid #01ffff',
        outlineOffset: '2px',
      },
    },
    formFieldInput: {
      background: isDark ? '#0a2b45' : '#3d4d5c',
      fontWeight: 'medium',
      fontSize: '0.875rem',
      border: '1px solid #01ffff',
      borderRadius: '0.5rem',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        background: isDark ? '#021221' : '#021221',
        outline: '2px ridge #01ffff',
      },
      '&:focus': {
        background: isDark ? '#021221' : '#021221',
        borderColor: '#01ffff',
        outline: '2px solid #01ffff',
        outlineOffset: '2px',
      },
    },
    formFieldCheckboxInput: {
      width: '1rem',
      height: '1rem',
      borderRadius: '0.25rem',
      border: '1px solid #01ffff',
      backgroundColor: isDark ? '#0a2b45' : '#021221',
      cursor: 'pointer',
      appearance: 'none',
      display: 'inline-block',
      verticalAlign: 'middle',
      position: 'relative',
      transition: 'all 0.2s ease-in-out',
      '&:checked': {
        backgroundColor: isDark ? '#0a2b45' : '#021221',
        borderColor: '#01ffff',
      },
      '&:hover': {
        borderColor: '#00c0c0',
      },
    },
    formFieldInputGroup: {
      background: isDark ? '#0a2b45' : '#3d4d5c',
      fontWeight: 'medium',
      fontSize: '0.875rem',
      border: '1px solid #01ffff',
      borderRadius: '0.5rem',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        background: isDark ? '#021221' : '#021221',
        outline: '2px ridge #01ffff',
      },
      '&:focus': {
        background: isDark ? '#021221' : '#021221',
        borderColor: '#01ffff',
        outline: '2px solid #01ffff',
        outlineOffset: '2px',
      },
    },
    formFieldCheckboxLabel: {
      color: '#ffffff',
      '& a': {
        color: '#01ffff',
        textDecoration: 'underline',
        transition: 'color 0.2s ease-in-out',
      },
      '& a:hover': {
        color: '#00c0c0',
      },
    },
    // Social Buttons
    socialButtonsBlockButton: {
      border: isDark ? '2px solid #01ffff' : '2px solid #01ffff',
      background: isDark ? '#0a2b45' : '#3d4d5c',
      '&:hover': {
        background: isDark ? '#021221' : '#021221',
        boxShadow: isDark ? '2px 2px 0px #01ffff' : '2px 2px 0px #01ffff',
        transform: 'translateY(-1px)',
      },
    },
    socialButtonsBlockButtonText: {
      color: isDark ? '#ffffff' : '#ffffff',
      fontSize: '0.875rem',
      fontWeight: 'medium',
    },
    // Footer
    footer: {
      background: isDark ? '#3d4d5c' : '#0a2b45',
      textAlign: 'center',
      marginTop: '-1rem',
    },
    footerActionText: {
      fontWeight: 'medium',
      color: isDark ? '#ffffff' : '#ffffff',
      marginRight: '.8rem',
    },
    footerActionLink: {
      fontWeight: 'medium',
      color: isDark ? '#01ffff' : '#01ffff',
      borderBottom: isDark ? '2px solid #01ffff' : '2px solid #01ffff',
      '&:hover': {
        color: isDark ? '#00c0c0' : '#3d4d5c',
        borderBottom: isDark ? '2px solid #00c0c0' : '2px solid #3d4d5c',
        opacity: isDark ? 0.8 : 1,
      },
    },
    footerPagesLink: {
      fontWeight: 'normal',
      color: isDark ? '#021221' : '#e0e0e0',
      '&:hover': {
        opacity: 0.8,
      },
    },
  };

  return (
    <ClerkProvider
      {...props}
      appearance={{ baseTheme, elements, layout, variables }}
    />
  );
}
